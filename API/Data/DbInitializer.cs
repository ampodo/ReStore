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
                    Name = "Cream",
                    Description = "Age-recovery cream that eliminates pigmentary spots and protects epidermis from pollution and stress.",
                    Price = 89,
                    PictureUrl = "/images/products/derm.png",
                    Brand = "DERM ACTE",
                    Type = "Anti-age",
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
                    Price = 56,
                    PictureUrl = "/images/products/hydra1.png",
                    Brand = "Hydraderm",
                    Type = "Treatment",
                    QuantityInStock = 5
                },
                new Product
                {
                    Name = "Serum",
                    Description = "Booster for all skin types. This is a fluid serum with moisturizing ingredients. Composed of acid pearls, more than 90% of natural ingredients.",
                    Price = 60,
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

               
               new Product
                {
                    Name = "Serum",
                    Description = "Revitalizing serum which is rich in extract and helps to recover the skin's biomechanical properties.",
                    Price = 75,
                    PictureUrl = "/images/products/sevemiracle1.png",
                    Brand = "Seve Miracle",
                    Type = "Treatment",
                    QuantityInStock = 5
                },


                new Product
                {
                    Name = "Mask",
                    Description = "Mask with apricot extract that relieves fatigueness. Gives instant radiance and freshness.",
                    Price = 26,
                    PictureUrl = "/images/products/masqueapricot.png",
                    Brand = "Academie face",
                    Type = "Treatment",
                    QuantityInStock = 5
                },

               
                  new Product
                {
                    Name = "Cream",
                    Description = "Cream with anti-aging properties of Iris extract. Helps to preserve skin's tonicity and youth. Consists of vegetable glycerin and wax.",
                    Price = 59,
                    PictureUrl = "/images/products/seve2.png",
                    Brand = "Seve Miracle",
                    Type = "Nourishing",
                    QuantityInStock = 5
                },


                  new Product
                {
                    Name = "Serum",
                    Description = "Apricot Serum-Radiance 8 hours 8h Radiance Serum - Will become an indispensable assistant in the daily care of all types of skin (including fading). This serum has polishing effect and can be categorized as anti-fatigue elixir.",
                    Price = 42,
                    PictureUrl = "/images/products/apricot2.png",
                    Brand = "Academie face",
                    Type = "Nourishing",
                    QuantityInStock = 5
                }
                    
            };
           
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();

      }  
    }
}
