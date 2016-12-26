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
    public class ProductsController: ApiController
    {
        // GET: api/Products
        public IHttpActionResult Get()
        {
            var db = new SuperMarketDb();
            var items = db.Items.Select(i => new
            {
                i.ItemId,
                i.ItemName,
                i.ItemDescription,

                Prices = i.Prices.Select(p => new
                {
                    p.Quantity,
                    p.UnitQuantity,
                    p.Store.StoreId,
                    p.Item.ItemId,
                    p.Store.ChainId,
                    p.ItemPrice                  
                }),
            });
            return Ok(items);
        }

    }
}