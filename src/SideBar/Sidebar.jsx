import Input from "../components/Input";


// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleInputChange }) => {

    return (
        <div>
            <div className="drawer lg:drawer-open z-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center md:hidden">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                        <div className="w-9 h-1 bg-black "> </div>
                        <div className="w-9 h-1 bg-black"> </div>
                        <div className="w-9 h-1 bg-black"> </div>
                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
                        {/* Category Content  */}
                        <div className="inline">
                            <h3 className="text-xl font-semibold text-center">Category</h3>
                            <label className="text-xl">
                                <input className="w-4 h-4 mx-1" onChange={handleInputChange} type="radio" value="" name='test' />
                                <span className="checkmark"></span>All
                            </label>
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value="sneakers"
                                title="Sneakers"
                                name="test"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value="flats"
                                title="Flats"
                                name="test"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value="sandals"
                                title="Sandals"
                                name="test"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value="heels"
                                title="Heels"
                                name="test"
                            />
                        </div>
                        {/* price content */}
                        <div className="inline">
                            <h3 className="text-xl font-semibold text-center">Category</h3>
                            <label className="text-xl">
                                <input className="w-4 h-4 mx-1" onChange={handleInputChange} value="" type="radio" name='test2' />
                                <span className="checkmark"></span>All
                            </label>
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value={50}
                                title="$0 - 50"
                                name="test2"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value={100}
                                title="$50 - $100"
                                name="test2"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value={150}
                                title="$100 - $150"
                                name="test2"
                            />
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value={200}
                                title="Over $150"
                                name="test2"
                            />
                        </div>
                        <div className="inline">
                            <h3 className="text-xl font-semibold text-center">Category</h3>
                            <label className="text-xl">
                                <input className="w-4 h-4 mx-1" onChange={handleInputChange} value="" type="radio" name="test3" />
                                <span className="checkmark"></span>All
                            </label>
                            <br />
                            <Input
                                handleInputChange={handleInputChange}
                                value="black"
                                title="Black"
                                name="test3"
                                color="black"
                            />
                            <br/>
                            <Input
                                handleInputChange={handleInputChange}
                                value="blue"
                                title="Blue"
                                name="test3"
                                color="blue"
                            />
                            <br/>
                            <Input
                                handleInputChange={handleInputChange}
                                value="red"
                                title="Red"
                                name="test3"
                                color="red"
                            />
                            <br/>
                            <Input
                                handleInputChange={handleInputChange}
                                value="green"
                                title="Green"
                                name="test3"
                                color="green"
                            />
                            <br/>
                            <label className="text-xl">
                                <input
                                    onChange={handleInputChange}
                                    type="radio"
                                    value="white"
                                    name="test3"
                                    className="w-4 h-4"
                                />
                                <span
                                    className="h-5 w-5 bg-[#eee] p-1 rounded-lg"
                                   
                                ></span>
                                White
                            </label>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;