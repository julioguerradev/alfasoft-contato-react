class Item{
  static lastId = 1;

  constructor({id, name, contact, mail, about, image}){
    // this.id = Item.lastId++
    this.id = id
    this.name = name
    this.contact = contact
    this.mail = mail
    this.about = about
    this.image = image
  }
}

export default Item
