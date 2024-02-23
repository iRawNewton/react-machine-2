import React from "react";

const Blogs = () => {
  return (
    <div className="px-7">
      <h1 className="text-[#F31220] font-semibold text-2xl">Our Blogs</h1>

      <div className="flex mt-5 gap-5">
        <div>
          <img
            src="/blog1.png"
            alt="image"
            className="h-[255px] object-cover"
          />
          <div className="mt-3">
            <h4 className="font-semibold">
              How Hybrid active noise cancellation tech works
            </h4>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec nibh aliquet, eleifend metus in, scelerisque sapien.
            </p>
            <button className="mt-5 font-semibold">Read more</button>
          </div>
        </div>
        <div>
          <img
            src="/blog2.png"
            alt="image"
            className="h-[255px] object-cover"
          />
          <div className="mt-3">
            <h4 className="font-semibold">
              Can&apos;t decide which one to buy among so many consoles
            </h4>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec nibh aliquet, eleifend metus in, scelerisque sapien.
            </p>
            <button className="mt-5 font-semibold">Read more</button>
          </div>
        </div>
        <div>
          <img
            src="/blog3.png"
            alt="image"
            className="h-[255px] object-cover"
          />
          <div className="mt-3">
            <h4 className="font-semibold">
              How Hybrid active noise cancellation tech works
            </h4>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec nibh aliquet, eleifend metus in, scelerisque sapien.
            </p>
            <button className="mt-5 font-semibold">Read more</button>
          </div>
        </div>
        <div>
          <img
            src="/blog1.png"
            alt="image"
            className="h-[255px] object-cover"
          />
          <div className="mt-3">
            <h4 className="font-semibold">
              How Hybrid active noise cancellation tech works
            </h4>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec nibh aliquet, eleifend metus in, scelerisque sapien.
            </p>
            <button className="mt-5 font-semibold">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
