import java.util.*;

public class EmployeeDemo {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        
        employees.add(new Employee(101, "Alice Johnson", 50000));
        employees.add(new Employee(102, "Bob Smith", 60000));
        employees.add(new Employee(103, "Charlie Brown", 55000));
        

        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}