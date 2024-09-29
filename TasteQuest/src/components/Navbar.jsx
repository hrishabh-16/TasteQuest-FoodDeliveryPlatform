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
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  ClipboardList,
  Home,
  LogOut,
  User,
  UserCircle,
} from "lucide-react";

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
        <div className="flex space-x-10 px-2 items-center">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-primary-foreground text-primary w-80"
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
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline font-medium">
                    {user?.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-1 font-roboto">
                <DropdownMenuItem
                  onSelect={() => navigate("/")}
                  className="flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors duration-200 "
                >
                  <Home className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Home</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 bg-gray-200" />
                <DropdownMenuItem
                  onSelect={() => navigate("/profile")}
                  className="flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  <UserCircle className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium ">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => navigate("/orders")}
                  className="flex items-center  cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  <ClipboardList className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Order History</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 bg-gray-200" />
                <DropdownMenuItem
                  onSelect={logout}
                  className="flex items-center  cursor-pointer px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span className="font-medium ">Logout</span>
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
