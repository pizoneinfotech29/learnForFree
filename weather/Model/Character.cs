using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace weather.Model
{
    public class Character
    {
        public int  id { get; set; }
        public string  Name { get; set; } = "Frodo";
        public int  HitPoints { get; set; } = 100;
        public int  strength { get; set; } = 10;
        public int  Defense { get; set; } = 10;
        public int  Intelligence { get; set; } = 10;

   public RpgClass Class {get; set;} = RpgClass.Knight;
    }
}