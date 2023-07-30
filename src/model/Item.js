class Item{
  static lastId = 1;

  constructor({name, contact, mail}){
    this.id = Item.lastId++
    this.name = name
    this.contact = contact
    this.mail = mail
    this.image = ''
  }
}

export default Item
