import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Bell, Cloud, Grid, Bookmark, User } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <Bell className="w-6 h-6 text-gray-600" />
      </header>
      
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center pt-6 pb-4 bg-white">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg" alt="Anup Kanti Deb" />
            <AvatarFallback>AKD</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold">Anup Kanti Deb</h2>
          <p className="text-sm text-gray-500">Chef @GS</p>
          
          <div className="flex justify-between w-full px-8 mt-6">
            <div className="text-center">
              <p className="font-semibold">1.2k</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">598</p>
              <p className="text-xs text-gray-500">Recipes</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">2.9k</p>
              <p className="text-xs text-gray-500">Views</p>
            </div>
          </div>
          
          <div className="flex w-full px-4 mt-6 space-x-2">
            <Button className="flex-1 text-sm" variant="outline">Edit Profile</Button>
            <Button size="icon" variant="outline">
              <Cloud className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="recipes" className="flex-1 text-sm">Recipes (598)</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-sm">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            {/* Recipe content would go here */}
          </TabsContent>
          <TabsContent value="reviews" className="px-4">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" alt="John Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <p className="font-semibold text-sm">John Smith</p>
                    <p className="text-xs text-gray-500">50 min ago</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="ml-1 text-sm">😊</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliq ua.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" alt="Alissa Jacks" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <p className="font-semibold text-sm">Alissa Jacks</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="ml-1 text-sm">😊</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="flex justify-around items-center p-4 bg-white border-t">
        <Grid className="w-6 h-6 text-gray-400" />
        <Bookmark className="w-6 h-6 text-gray-400" />
        <Button size="sm" className="bg-orange-100 text-orange-500 hover:bg-orange-200">
          <User className="w-4 h-4 mr-2" />
          Profile
        </Button>
      </footer>
    </div>
  )
}


