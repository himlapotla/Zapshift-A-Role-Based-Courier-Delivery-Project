import { FaTruck, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";
import service from '../../../assets/service.png'

const ServicesSection = () => {
    return (
        <div className="bg-gray-100 py-16">

            {/* HOW IT WORKS */}
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-semibold mb-8 text-gray-700">
                    How it Works
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                        <FaTruck className="text-3xl mx-auto text-gray-500 mb-3" />
                        <h3 className="font-semibold mb-2">Booking Pick & Drop</h3>
                        <p className="text-sm text-gray-500">
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                        <FaMoneyBillWave className="text-3xl mx-auto text-gray-500 mb-3" />
                        <h3 className="font-semibold mb-2">Cash On Delivery</h3>
                        <p className="text-sm text-gray-500">
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                        <FaWarehouse className="text-3xl mx-auto text-gray-500 mb-3" />
                        <h3 className="font-semibold mb-2">Delivery Hub</h3>
                        <p className="text-sm text-gray-500">
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                        <FaBuilding className="text-3xl mx-auto text-gray-500 mb-3" />
                        <h3 className="font-semibold mb-2">Booking SME & Corporate</h3>
                        <p className="text-sm text-gray-500">
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                </div>
            </div>


            {/* OUR SERVICES */}
            <div className="max-w-6xl mx-auto mt-16 px-6 bg-[#0c4b4b] rounded-3xl py-14">

                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <p className="text-sm mt-3 text-gray-200 max-w-xl mx-auto">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>


                <div className="grid md:grid-cols-3 gap-8">

                    {/* CARD */}
                    <div className="bg-white rounded-xl p-6 text-center shadow hover:bg-lime-400">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Express & Standard Delivery
                        </h3>
                        <p className="text-gray-500 text-sm">
                            We deliver parcels within 24–72 hours in Dhaka,
                            Chittagong, Sylhet, Khulna, and Rajshahi.
                        </p>
                    </div>

                    <div className="bg-lime-400 rounded-xl p-6 text-center shadow hover:bg-lime-600">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Nationwide Delivery
                        </h3>
                        <p className="text-gray-700 text-sm">
                            We deliver parcels nationwide with home delivery
                            in every district ensuring products reach customers.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow hover:bg-lime-400">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Fulfillment Solution
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Inventory management support, online order processing,
                            packaging, and after sales support.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow hover:bg-lime-400">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Cash on Home Delivery
                        </h3>
                        <p className="text-gray-500 text-sm">
                            100% cash on delivery anywhere in Bangladesh with
                            guaranteed safety of your product.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow hover:bg-lime-400">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Corporate Service / Contract Logistics
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Customized corporate services including warehouse
                            and inventory management support.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow hover:bg-lime-400">
                        <div className="flex justify-center mb-4">
                            <img src={service} alt="service" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Parcel Return
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Through reverse logistics facility we allow customers
                            to return or exchange their products.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServicesSection;