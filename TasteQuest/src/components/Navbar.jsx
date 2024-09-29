import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import { FiShoppingBag, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleIconClick = () => {
    handleSearch(new Event("click"));
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold">
          TasteQuest
        </Link>
        <div className="flex space-x-4 items-center">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-primary-foreground text-primary w-64"
            />
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer"
              onClick={handleIconClick} // Attach the click event
            />
          </form>

          <Link to="/cart" className="flex items-center">
            <FiShoppingCart className="mr-2" />{" "}
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <Link to="/contact" className="flex items-center">
            Contact
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <FiUser />
                  <span className="hidden sm:inline">{user.email}</span>
                  <FiChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => navigate("/profile")}>
                  <span className="font-roboto">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/orders")}>
                  <span className="font-roboto">Order History</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={logout}>
                  <span className="font-roboto">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login" className="flex items-center">
                <FiUser className="mr-2" />{" "}
                <span className="hidden sm:inline">Login</span>
              </Link>
              <Link to="/register" className="flex items-center">
                <FiUser className="mr-2" />{" "}
                <span className="hidden sm:inline">Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
