package com.beans;

public class Customers {
	
		private int cust_id, active_orders;;
		private String firstname, lastname, address;
		public int getCust_id() {
			return cust_id;
		}
		public void setCust_id(int cust_id) {
			this.cust_id = cust_id;
		}
		public int getActive_orders() {
			return active_orders;
		}
		public void setActive_orders(int active_orders) {
			this.active_orders = active_orders;
		}
		public String getFirstname() {
			return firstname;
		}
		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}
		public String getLastname() {
			return lastname;
		}
		public void setLastname(String lastname) {
			this.lastname = lastname;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		
}
