import React from "react";

export default function About() {
  return (
    <div className="mt-5">
      <h3 className="text-center fs-30">What We Do?</h3>
      <p className=" about-head-text text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
        libero vel ex maximus vulputate nec eu ligula. Vestibulum elementum nisi
        ut fermentum lobortis. Sed quis iaculis felis.
      </p>
      <img
        src="https://cdn.shopify.com/s/files/1/0318/4335/2712/files/about-banner_e8b70be0-de55-4f05-b270-c3d1a3000382.jpg?v=1613731745"
        className="py-4 img-fluid"
      />
      <p>
        There is something about the saree that makes a woman look dignified,
        glorifying and every bit stylish. Mikshaa was set up in the year 2017
        with a motive to offer its designer collection at competitive price and
        merchantable quality to its whole seller and worldwide online customer.
      </p>
      <p>
        No matter what your individual style may be, you are sure to find a
        beautiful saree that will match your taste, given the large collection
        of stunning Indian sarees that can be worn almost on all the occasions
        be it wedding, formal parties, Bridal, family get togethers and more!
      </p>
      <p>
        Mikshaa is the trusted online ethnic wears store and feels proud in
        Indian heritage and cultural diversity in women wears. With so many
        different styles of drape, so many different patterns and fabric
        choices, sarees can fill every wardrobe with much needed variety. When
        in doubt, it’s your best bet at looking elegant and put-together. Every
        state in India and worldwide are put together to cater best in terms of
        Indian fashion trends and women clothing range.
      </p>
      <p>
        Mikshaa goals is the all worldwide delivered to ethnic wears for women.
        Celebrate big fat Indian occasions such as Diwali, Navratri, Durga Puja,
        Holi and marriage celebration with our evergreen collection of online
        Indian ethnic wears for women. A wide Variety of option are available at
        the click of mouse.
      </p>
      <p>
        Mikshaa is a great online destination to explore its extraordinary
        collection for sarees and other ehnic wears the best part is the site
        has the most competitive price and a wide eclectic range of products
        guaranteed to satisfy every customer. Mikshaa ensures excellent delivery
        services to its buyer in a good condition and in a prompt manner.
      </p>
      <p>
        Mikshaa collection is also available in the overseas market (USA, UK,
        Europe, Australia, Southeast Asia, Dubai, Srilanka and other countries)
        under the brand name of Mikshaa.
      </p>

      {/* Cards start */}
      <div className="row py-5 my-5 ">
        <div className="col prc-1">
          <div className="bg-yellow h-188">
            <div className="text-center text-white p-5">
              <h1 className="fs-60">150</h1>
              <p>Years In Business</p>
            </div>
          </div>
        </div>
        <div className="col pxc-1">
          <div className="bg-yellow h-188">
            <div className="text-center text-white p-5">
              <h1 className="fs-60">150</h1>
              <p>Clients And Partners</p>
            </div>
          </div>
        </div>
        <div className="col pxc-1">
          <div className="bg-yellow h-188">
            <div className="text-center text-white p-5">
              <h1 className="fs-60">150</h1>
              <p>Show Room</p>
            </div>
          </div>
        </div>
        <div className="col psc-1">
          <div className="bg-yellow h-188">
            <div className="text-center text-white p-5">
              <h1 className="fs-60">150</h1>
              <p>Billon Sales</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cards End */}

      {/* Email Subscription start */}
      <div className="bg-grey newsLetter-border py-3 mb-5">
        <div className="text-center">
          <span className="fs-20 fw-bold">Get The Latest Deals</span>
          <p>And Receive $20 Coupon For First Shopping</p>
          <div class="input-group mb-3 w-60 mx-auto ">
            <input
              type="text"
              class="form-control py-12 "
              placeholder="Enter Your Email Address"
              aria-label="Enter Your Email Address"
              aria-describedby="button-addon2"
            />
            <button
              class="btn bg-darkYellow text-white fw-bold px-4"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Email Subscription end */}
    </div>
  );
}
