using System;

namespace Backend
{
    public class Chart
    {
        public string User_Name { get; set; }
        public string DOB { get; set; }
        public string Zodiac_Sign { get; set; }
        public string Zodiac_Description { get; set; }
        public string Chinese_Sign { get; set; }
        public int Name_Number { get; set; }
        public string Name_Reading { get; set; }
        public int DOB_Number { get; set; }
        public string DOB_Reading { get; set; }
        public int Id { get; set; }
        public Chart()
        {

        }
        public Chart(string name, string birthday, string zodiac, string description, string chinese, int namenumber, string namereading, int dobnumber, string dobreading)
        {
            this.User_Name = name;
            this.DOB = birthday;
            this.Zodiac_Sign = zodiac;
            this.Zodiac_Description = description;
            this.Chinese_Sign = chinese;
            this.Name_Number = namenumber;
            this.Name_Reading = namereading;
            this.DOB_Number = dobnumber;
            this.DOB_Reading = dobreading;
        }
    }
}