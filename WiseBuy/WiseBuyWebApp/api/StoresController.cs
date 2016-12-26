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
    public class StoresController: ApiController
    {
        // GET: api/Stores
        public IHttpActionResult Get()
        {
            var db = new SuperMarketDb();
            var stores = db.Stores.Select(s => new
            {
                s.StoreId,
                s.StoreName,
                s.ChainId,             
                s.Address,
                s.City
            });
            return Ok(stores);
        }
    }
}