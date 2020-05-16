package com.serv.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import com.beans.Customers;
import com.beans.Inventory;
import com.beans.Orders;


public class DataStore {
	
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	static
	{
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	List<Customers> ts_cust = new ArrayList<Customers>();
	List<Inventory> ts_inv = new ArrayList<Inventory>();
	List<Orders> ts_ord = new ArrayList<Orders>();
	public void getConnection() throws SQLException
	{
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3308/ordermanagementdb", "root", "root");
		stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
	}
    public List<Customers> storeCust() throws SQLException
	{
		ResultSet rs = stmt.executeQuery("SELECT * FROM customers");
		
		while(rs.next())
		{
			Customers cust = new Customers();
			cust.setCust_id(rs.getInt(1));
			cust.setFirstname(rs.getString(2));
			cust.setLastname(rs.getString(3));
			cust.setAddress(rs.getString(4));
			cust.setActive_orders(rs.getInt(5));
			ts_cust.add(cust);
		}
	
		return ts_cust;
	}
    public List<Customers> storeCustId(String cid) throws SQLException
	{
    	
		ResultSet rs = stmt.executeQuery(String.format("SELECT * FROM CUSTOMERS WHERE CUST_ID = %s", cid));
		
		while(rs.next())
		{
			Customers cust = new Customers();
			cust.setCust_id(rs.getInt(1));
			cust.setFirstname(rs.getString(2));
			cust.setLastname(rs.getString(3));
			cust.setAddress(rs.getString(4));
			cust.setActive_orders(rs.getInt(5));
			ts_cust.add(cust);
		}
	
		return ts_cust;
	}
    
    public List<Customers> storeCustName(String cid) throws SQLException
	{
    	
		ResultSet rs = stmt.executeQuery(String.format("SELECT * FROM CUSTOMERS WHERE FIRSTNAME = '%s'", cid));
		
		while(rs.next())
		{
			Customers cust = new Customers();
			cust.setCust_id(rs.getInt(1));
			cust.setFirstname(rs.getString(2));
			cust.setLastname(rs.getString(3));
			cust.setAddress(rs.getString(4));
			cust.setActive_orders(rs.getInt(5));
			ts_cust.add(cust);
		}
	
		return ts_cust;
	}
	
	public List<Inventory> storeInv() throws SQLException
	{
		ResultSet rs = stmt.executeQuery("SELECT * FROM inventory");
		
		while(rs.next())
		{
			Inventory inv = new Inventory();
			inv.setItem_id(rs.getInt(1));
			inv.setName(rs.getString(2));
			inv.setQuant(rs.getInt(3));
			ts_inv.add(inv);
		}
		return ts_inv;
	}
	public List<Orders> storeOrd2(String fname) throws SQLException
	{
		ResultSet rs = stmt.executeQuery(String.format("select * from orders where cust_id = (select CUST_ID from customers where firstname ='%s')" , fname));
		while(rs.next())
		{
			Orders ord = new Orders();
			ord.setOrd_id(rs.getInt(1));
			ord.setCust_id(rs.getInt(2));
			ord.setDesc(rs.getString(3));
			ord.setQuant(rs.getInt(4));
			ord.setRate(rs.getInt(5));
			ord.setTot(rs.getInt(6));
			ts_ord.add(ord);
		}
		return ts_ord;
	}
	public List<Orders> storeOrd1(String cid) throws SQLException
	{
		ResultSet rs = stmt.executeQuery(String.format("SELECT * FROM orders where CUST_ID = %s" , cid));
		
		while(rs.next())
		{
			Orders ord = new Orders();
			ord.setOrd_id(rs.getInt(1));
			ord.setCust_id(rs.getInt(2));
			ord.setDesc(rs.getString(3));
			ord.setQuant(rs.getInt(4));
			ord.setRate(rs.getInt(5));
			ord.setTot(rs.getInt(6));
			ts_ord.add(ord);
		}
		return ts_ord;
	}
	
	/*public static void main(String args[]) throws SQLException
	{
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3308/eshop", "root", "");
		stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
		rs = stmt.executeQuery("SELECT * FROM customers");
		Customers cust = new Customers();
		List<Customers> ts_cust = new ArrayList<Customers>();
		while(rs.next())
		{
			cust.setCust_id(rs.getInt(1));
			cust.setFirstname(rs.getString(2));
			cust.setLastname(rs.getString(3));
			cust.setAddress(rs.getString(4));
			cust.setActive_orders(rs.getInt(5));
			ts_cust.add(cust);
		}
		
		for (Customers c : ts_cust)
		{
			System.out.println(c.getCust_id()+ " "+ c.getFirstname()+" "+c.getLastname());
		}
		
	}*/
}


