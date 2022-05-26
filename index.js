const employeeList = () => {
  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      if (!response.ok) {
        document.location.reload(true);
        throw Error("Error");
      }
      return response.json();
    })

    .then((data) => {
      console.log(data.data);
      const html = data.data.map((user) => {
        return `
             <p> Name: ${user.employee_name}</p>
             <p> Age: ${user.employee_age}</p>
             `;
      });
      console.log(html);
      let ul = document.getElementById("items");

      for (let i = 0; i < html.length; i++) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = html[i];
        ul.appendChild(li);
      }

      let boxId = document.querySelectorAll(".list-group-item");

      for (let j = 0; j <= boxId.length; j++) {
        try {
          boxId[j].addEventListener("click", function () {
            data.data.map((user) => {
              if (j + 1 == user.id) {
                document.write(
                  "<p>Employee name: " +
                    user.employee_name +
                    "</p>" +
                    "<p>Employee salary: " +
                    user.employee_salary +
                    "</p>" +
                    "<p> Employee age: " +
                    user.employee_age +
                    "</p>" +
                    "<a href=javascript:location.reload(true)>Go back</a>"
                );
              }
            });
          });
        } catch (error) {
          console.log(error);
        }
      }
    })

    .catch((e) => {
      console.error(e, e.stack);
    });
};

employeeList();
