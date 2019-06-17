// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
      "Name": "Bob Belcher",
      "Photo": "http://pm1.narvii.com/6426/69fa5e8056001a1bdf8e602b8017529ec1798ce8_00.jpg",
      "Answers[]": ["5", "3", "1", "4", "4", "1", "5", "1", "1", "1"]
    },
    {
      "Name": "Linda Belcher",
      "Photo": "https://i.kinja-img.com/gawker-media/image/upload/s--6oJXzofB--/c_scale,f_auto,fl_progressive,q_80,w_800/19dnmy0vk8qg4jpg.jpg",
      "Answers[]": ["4", "3", "2", "5","1", "3", "1", "5", "3", "2"]
    },
    {
    "Name": "Tina Belcher",
    "Photo": "https://cdn.now.howstuffworks.com/media-content/9d579a48-909f-45a6-a264-bb7213a70090-1920-1080.jpg",
    "Answers[]":["3", "1", "1", "1", "5", "3", "1", "2", "1", "5"]
    },
    {
      "Name": "Gene Belcher",
      "Photo": "https://i.ytimg.com/vi/vtwHXyW3hD4/maxresdefault.jpg",
      "Answers[]": ["1", "1", "1", "1", "1", "5", "1", "2", "5", "1"]
    },
    {
      "Name": "Louise Belcher",
      "Photo": "https://pbs.twimg.com/profile_images/3637982405/d4433bb7717739e9a6d589e69f0fb7d8_400x400.jpeg",
      "Answers": ["2", "5", "5", "1", "1", "1", "2", "1","1", "1"]
    }
  ]
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;
  
