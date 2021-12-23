using System.Collections.Generic;
using System.Linq;
using API.Entities;



namespace API.Data
{
    public static class DbInitializer
    {

      public static void Initialize(StoreContext context)
      {
         if (context.Products.Any()) return;

         var products = new List<Product>
         {
                new Product
                {
                    Name = "Cleansing Water",
                    Description = "For all skin types. Helps to remove any makeup from the face and eyes.",
                    Price = 30,
                    PictureUrl = "/images/products/derm1.png",
                    Brand = "DERM ACTE",
                    Type = "Micellar",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Moisturizing Fluid",
                    Description = "This facial fluid protects skin from sun exposure and pollution.",
                    Price = 43,
                    PictureUrl = "/images/products/derm2.png",
                    Brand = "DERM ACTE",
                    Type = "Moisturizer",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "White UV Screen",
                    Description = "Splendid solution embodies brightening, invisible anti-UV, and anti-pollution treatment.",
                    Price = 48,
                    PictureUrl = "/images/products/derm3.png",
                    Brand = "DERM ACTE",
                    Type = "Brightening",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Corrector",
                    Description = "A many-sided skincare product that can be applied to various types of facial lines to eliminate fatigue.",
                    Price = 93,
                    PictureUrl = "/images/products/derm4.png",
                    Brand = "DERM ACTE",
                    Type = "Serum",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Lotion",
                    Description = "Alcohol-free lotion that consists of spruce oil and carrot extract. Compatible with all skin types.",
                    Price = 26,
                    PictureUrl = "/images/products/aroma1.png",
                    Brand = "Aromatherapie",
                    Type = "Tonifying",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Cleansing gel",
                    Description = "Facial gel wash contains lavender essential oil and lemon extract.",
                    Price = 28,
                    PictureUrl = "/images/products/aroma2.png",
                    Brand = "Aromatherapie",
                    Type = "Liquid",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Radiance mask",
                    Description = "Treatment for all skin types with Blackcurrant Bud extract that hydrates the skin.",
                    Price = 30,
                    PictureUrl = "/images/products/aroma3.png",
                    Brand = "Aromatherapie",
                    Type = "Face care",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Light fluid",
                    Description = "Hydrating treatment comprises soft fluid in order to moisturize the most dehydrated epidermis.",
                    Price = 53,
                    PictureUrl = "/images/products/hydra1.png",
                    Brand = "Hydraderm",
                    Type = "Treatment",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Serum",
                    Description = "Booster for all skin types. This is a fluid serum with moisturizing ingredients. Composed of acid pearls, more than 90% of natural ingredients.",
                    Price = 58,
                    PictureUrl = "/images/products/hydra2.png",
                    Brand = "Hydraderm",
                    Type = "Treatment",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Mask",
                    Description = "Removes small dehydration lines from the face. Mask recovers softness of the skin. Nourishing and vitalizing.",
                    Price = 33,
                    PictureUrl = "/images/products/hydra3.png",
                    Brand = "Hydraderm",
                    Type = "Re-hydrating",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Shaving gel",
                    Description = "This lubricating gel can be used as a cleanser. Reduces the painful feeling of tightness.",
                    Price = 31,
                    PictureUrl = "/images/products/men1.png",
                    Brand = "Academie men",
                    Type = "Facial",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Eye contour gel",
                    Description = "A specific gel that removes dark circles and puffiness.",
                    Price = 32,
                    PictureUrl = "/images/products/men2.png",
                    Brand = "Academie men",
                    Type = "Smoothing",
                    QuantityInStock = 5
                },
            };
           
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();

      }  
    }
}
