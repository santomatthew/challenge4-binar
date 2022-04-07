class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    withDriver,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.withDriver = withDriver;

    if (this.constructor == Component) {
      throw new Error("Can't instance from abstract class");
    }
  }

  render() {
    return `
    <div class="col-lg-4 d-flex justify-content-center " style="margin-top: 30px
      ;">
          <div class="listcar-card card" style="width: 25rem;">
              <img  src="${
                cars[i].image
              }" style="object-fit: contain;" width="100%" height="400px" class="card-img-top" alt="${
      cars[i].manufacture
    }">
              <div class="card-body" style="font-family: Helvetica;">
                  <p>${cars[i].manufacture} ${cars[i].model}</p>
                  <p> <b>Rp ${rupiah(cars[i].rentPerDay)} / hari</b></p>
                  <p>${cars[i].description}</p>
                  <p><img src="./images/pict/capacity.svg" width="16" height="16"> ${
                    cars[i].capacity
                  } orang</p>
                  <p><img src="./images/pict/gear.svg" width="16" height="16"> ${
                    cars[i].transmission
                  }</p>
                <p><img src="./images/pict/calendar.svg" width="16" height="16"> Tahun  ${
                  cars[i].year
                }</p>
                </div>
                <div class="card-footer">
                <button class="btn btn-success col-lg-12">Pilih Mobil</button>
              </div>
          </div>
      </div>
  `;
  }
}

class Car extends Component {}
