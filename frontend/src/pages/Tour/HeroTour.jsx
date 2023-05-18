import React from "react";
import SearchBar from "./SearchBar";

const image = {
  backgroundImage:
    "url('https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/header%20photo.jpg?alt=media&token=81dbb6a1-7b18-473d-a151-dbe0a59e8bb7')",
  height: "500px",
  backgroundPosition: "50%",
};

const HeroTour = () => {
  return (
    // <!-- Container for demo purpose -->
    <div>
      <div className="">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover "
          style={image}
        >
          <div class="flex h-full items-center justify-center text-center">
            <div>
              <h2
                class="mb-5  text-6xl font-bold text-black "
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Do More With Travely
              </h2>
              <div>
                <div className="mt-12 w-1/2 mr-auto ml-auto">
                  <h4
                    class="mt-5 mb-6 text-xl  uppercase animate-bounce text-white text-center"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "normal",
                      border: "solid 1px  white",
                      textShadow: "3px 1px black",
                    }}
                  >
                    an island awaits you <br />
                    Discover sri Lanka
                  </h4>
                </div>
              </div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- Container for demo purpose -->
  );
};

export default HeroTour;
