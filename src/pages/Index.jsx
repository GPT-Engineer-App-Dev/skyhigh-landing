import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/50x50" alt="Company Logo" />
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg font-medium">Home</a>
            <a href="#features" className="text-lg font-medium">Features</a>
            <a href="#pricing" className="text-lg font-medium">Pricing</a>
            <a href="#about" className="text-lg font-medium">About</a>
            <a href="#contact" className="text-lg font-medium">Contact</a>
          </nav>
        </div>
        <Button variant="outline">Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Revolutionize Your Workflow</h1>
          <p className="text-lg">Our SaaS product helps you streamline your tasks and increase productivity.</p>
          <Button>Get Started</Button>
        </div>
        <img src="https://placehold.co/600x400" alt="Hero Image" />
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="space-y-6">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"This product has changed the way I work!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Incredible features and easy to use."</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>User 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Highly recommend this to everyone."</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="space-y-6">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Feature 1</p>
              <p>Feature 2</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <p>Feature 1</p>
              <p>Feature 2</p>
              <p>Feature 3</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>Feature 1</p>
              <p>Feature 2</p>
              <p>Feature 3</p>
              <p>Feature 4</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-6">
        <div className="flex justify-between items-center">
          <img src="https://placehold.co/50x50" alt="Company Logo" />
          <nav className="space-x-6">
            <a href="#privacy" className="text-lg font-medium">Privacy Policy</a>
            <a href="#terms" className="text-lg font-medium">Terms of Service</a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <a href="#facebook" className="text-lg font-medium">Facebook</a>
          <a href="#twitter" className="text-lg font-medium">Twitter</a>
          <a href="#linkedin" className="text-lg font-medium">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;