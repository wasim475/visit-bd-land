import React from 'react';

const AddPackages = () => {
    const handleSubmit =(e)=>{
        
    }
    return (
        <>
            <div>
                <section></section>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Package Name:
                            <input type="text" name="packageName" />
                        </label>
                        <label>
                            Destination:
                            <input type="text" name="destination" />
                        </label>
                        <label>
                            Duration:
                            <input type="text" name="duration" />
                        </label>
                        <label>
                            Price:
                            <input type="text" name="price" />
                        </label>
                        <label>
                            Description:
                            <textarea name="description" />
                        </label>
                        <label>
                            Start Date:
                            <input type="date" name="startDate" />
                        </label>
                        <label>
                            End Date:
                            <input type="date" name="endDate" />
                        </label>
                        <label>
                            Max Group Size:
                            <input type="number" name="maxGroupSize" />
                        </label>
                        <label>
                            Difficulty:
                            <input type="text" name="difficulty" />
                        </label>
                        <label>
                            Included Meals:
                            <input type="text" name="includedMeals" />
                        </label>
                        <label>
                            Accommodation:
                            <input type="text" name="accommodation" />
                        </label>
                        <label>
                            Transportation:
                            <input type="text" name="transportation" />
                        </label>
                        <label>
                            Highlight 1:
                            <input type="text" name="highlight1" />
                        </label>
                        <label>
                            Highlight 2:
                            <input type="text" name="highlight2" />
                        </label>
                        <label>
                            Highlight 3:
                            <input type="text" name="highlight3" />
                        </label>
                        <button type="submit">Create Package</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default AddPackages;