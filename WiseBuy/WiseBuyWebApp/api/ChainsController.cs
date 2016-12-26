using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using DbCreator;

namespace WiseBuyWebApp.api
{
    [EnableCors("*", "*", "*")]
    public class ChainsController: ApiController
    {
        // GET: api/Chains
        public IHttpActionResult Get()
        {
            var db = new SuperMarketDb();
            var chainsDto = db.Chains.Select(c => new
            {
                chainId = c.ChainId,
                name = c.ChainName,

                stores = c.Stores.Select(s => new
                {
                    storeId = s.StoreId,
                    name = s.StoreName,
                    city = s.City,
                    address = s.Address,

                    prices = s.Prices.Select(p => new
                    {
                        productPrice = p.ItemPrice,
                        quantity = p.Quantity,
                        unitquantity = p.UnitQuantity,

                        product = new
                        {
                            name = p.Item.ItemName,
                            ProductId = p.Item.ItemId,
                            description = p.Item.ItemDescription
                        }
                    })
                })
            });
            return Ok(chainsDto);
        }

    }
}