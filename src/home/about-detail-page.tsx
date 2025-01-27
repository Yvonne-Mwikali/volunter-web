import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import community2 from "@/assets/aboutus-women.jpg";
import community1 from "@/assets/education.jpeg";

export function AboutDetailPage() {
  return (
    <div className="min-h-screen bg-[#0a0f37] text-white">
      {/* Background and History Section */}
      <section className="container px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-last ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00ffcc]">Background and History</h1>
          <p className="text-white leading-relaxed">
            Established to address gaps in education and empowerment in Homabay and Migori counties, EECCBO emerged as a
            grassroots response to socio-economic challenges in the region. Our journey began with a vision to create
            lasting change through education and community development.
          </p>
          <p className="text-white mt-4 leading-relaxed">
            EECCBO operates in Homabay and Migori counties, with the potential for future expansion as necessary.
          </p>
        </div>
        <div className="relative h-[400px] rounded-tr-[100px] overflow-hidden order-start">
          <img
            src={community2 || "/placeholder.svg"}
            alt="People working together"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="container px-4 mx-auto py-16 bg-white/80">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#0a0f37] border-none text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00ffcc]">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                To create a self-reliant and educated community empowered to address socio-economic and developmental
                challenges.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#0a0f37] border-none text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#00ffcc]">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                To foster holistic development through education, mentorship, capacity building, and sustainable
                community initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <section className="bg-white text-[#0a0f37] rounded-lg shadow-xl p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00ffcc] text-center">Our Objectives</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00ffcc]">Educational Support</h3>
                    <ul className="list-disc list-inside text-[#0a0f37] space-y-2">
                      <li>Provide free tuition, mentorship, and access to educational resources</li>
                      <li>Promote literacy and computer/digital skills</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00ffcc]">Youth Empowerment</h3>
                    <ul className="list-disc list-inside text-[#0a0f37] space-y-2">
                      <li>Leadership Training and workshops</li>
                      <li>Youth Advocacy Clubs establishment</li>
                      <li>Civic Education programs</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00ffcc]">Community Development</h3>
                    <ul className="list-disc list-inside text-[#0a0f37] space-y-2">
                      <li>Initiate livelihood improvement projects</li>
                      <li>Promote health awareness and environmental conservation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00ffcc]">Civic Engagement</h3>
                    <ul className="list-disc list-inside text-[#0a0f37] space-y-2">
                      <li>Advocate for community participation in governance</li>
                      <li>Promote gender equality and inclusivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative order-first">
            <div className="relative h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-[#00ffcc]/10 z-10 rounded-tl-[100px]" />
              <img
                src={community1 || "/placeholder.svg"}
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-tl-[100px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-[#00ffcc]" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 bg-white/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00ffcc]">Join Our Mission</h2>
          <p className="text-[#0a0f37] mb-8 max-w-2xl mx-auto">
            Be part of our journey to create positive change in our communities. Whether through volunteering,
            partnership, or support, your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00ffcc] text-[#0a0f37] hover:bg-[#00ffcc]/80">Become a Volunteer</Button>
            <Button variant="outline" className="border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <Link to="#" className="text-[#0a0f37] hover:text-[#00ffcc]">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-[#0a0f37] hover:text-[#00ffcc]">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-[#0a0f37] hover:text-[#00ffcc]">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-[#0a0f37] hover:text-[#00ffcc]">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
