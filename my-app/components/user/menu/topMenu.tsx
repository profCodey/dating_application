import { Facebook, Instagram, Youtube } from "iconsax-react"

export function TopMenu() {
    
    return (
      <div className="bg-secondary w-screen h-12">
        <div className="flex justify-end items-center mr-10 h-full">
          <div className="">
            <div className="flex items-center gap-2">
              <Facebook size="20" color="#ffffff" variant="Bold" />
              <a href="#home" className="text-white mr-4">
                Facebook
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <Instagram size="20" color="#ffffff" variant="Bold" />
              <a href="#home" className="text-white mr-4">
                Instagram
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <Youtube size="20" color="#ffffff" variant="Bold" />
              <a href="#home" className="text-white mr-4">
                Youtube
              </a>
            </div>
          </div>
          {/* <div className="">
            <div className="flex items-center">
              <Facebook size="32" color="#ffffff" variant="Bold" />
              <a href="#home" className="text-white mr-4">
                X
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
}