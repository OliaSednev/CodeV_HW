using XML_Parser;
using System.Xml.Linq;

namespace DbInitialization
{
    class Program
    {
        static void Main(string[] args)
        {
            StoreAndPriceParser storeAndPriceParser = new StoreAndPriceParser();

            ////clear DB
            storeAndPriceParser.ClearDb();

            //////storefiles
            XDocument fileXDocumentStore =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Hazihinam\Stores7290700100008-201608152005.xml");
            storeAndPriceParser.ParseStoreXmlFile(fileXDocumentStore);

            fileXDocumentStore =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Ramilevi\Stores7290058140886-201608152005.xml");
            storeAndPriceParser.ParseStoreXmlFile(fileXDocumentStore);

            fileXDocumentStore =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Yohananof\Stores7290803800003-201608150100.xml");
            storeAndPriceParser.ParseStoreXmlFile(fileXDocumentStore);

            //////pricefiles
            XDocument fileXDocumentPrice =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Hazihinam\PriceFull7290700100008-001-201608150010_short.xml");
            storeAndPriceParser.ParsePriceXmlFiles(fileXDocumentPrice);

            fileXDocumentPrice =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Ramilevi\PriceFull7290058140886-008-201608150010_short.xml");
            storeAndPriceParser.ParsePriceXmlFiles(fileXDocumentPrice);

            fileXDocumentPrice =
                XDocument.Load(@"C:\Users\CodeValue\Desktop\SuperEx\storesFiles\Yohananof\PriceFull7290803800003-007-201608150010_short.xml");
            storeAndPriceParser.ParsePriceXmlFiles(fileXDocumentPrice);
        }
    }
}
