using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Knightswatch_portfolio_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult AriesGridDemo()
        {
            return View();
        }

        public ActionResult Lyrics()
        {
            return View();
        }

        public ActionResult jsdemo()
        {
            return View();
        }

        public ActionResult ModalandPill()
        {
            return View();
        }

        public ActionResult Translator()
        {
            return View();
        }
        public ActionResult Portfolio()
        {
            return View();
        }
        public ActionResult Palindrome()
        {
            return View();
        }
        public ActionResult Math()
        {
            return View();
        }
        public ActionResult Factorial()
        {
            return View();
        }
        public ActionResult FizzBuzz()
        {
            return View();
        }
        public ActionResult JavaScriptE()
        {
            return View();
        }
        public ActionResult WebDev()
        {
            return View();
        }
        public ActionResult Highlighter()
        {
            return View();
        }
    }
}