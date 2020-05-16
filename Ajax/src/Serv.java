

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.beans.Customers;
import com.beans.Inventory;
import com.beans.Orders;
import com.google.gson.Gson;
import com.serv.util.DataStore;

import jdk.nashorn.internal.parser.JSONParser;


@WebServlet("/Serv")
public class Serv extends HttpServlet {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4265787360980001657L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		DataStore ds;
		int id = Integer.parseInt(request.getParameter("id"));
		if (id == 1)
		{
			System.out.println(request.getParameter("value"));
			ds = new DataStore();
			ds = new DataStore();
			List<Customers> ts = new ArrayList<Customers>();
			try {
				ds.getConnection();
				
				ts = ds.storeCustId(request.getParameter("value"));
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			String Json = new Gson().toJson(ts);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(Json);
		}
		
		else if(id == 2)
		{
			ds = new DataStore();
			ds = new DataStore();
			List<Customers> ts = new ArrayList<Customers>();
			try {
				ds.getConnection();
				
				ts = ds.storeCustName(request.getParameter("value"));
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			String Json = new Gson().toJson(ts);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(Json);
		}
		
		else if(id == 3)
		{
			ds = new DataStore();
			List<Orders> ts = new ArrayList<Orders>();
			try {
				ds.getConnection();
				
				ts = ds.storeOrd1(request.getParameter("value"));
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			String Json = new Gson().toJson(ts);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(Json);
		}
		else if(id == 4)
		{
			ds = new DataStore();
			List<Orders> ts = new ArrayList<Orders>();
			try {
				ds.getConnection();
				
				ts = ds.storeOrd2(request.getParameter("value"));
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			String Json = new Gson().toJson(ts);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(Json);
		}
		
		else if(id == 5)
		{
			ds = new DataStore();
			List<Inventory> ts = new ArrayList<Inventory>();
			try {
				ds.getConnection();
				
				ts = ds.storeInv();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			String Json = new Gson().toJson(ts);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(Json);
		}

		else {
		ds = new DataStore();
		List<Customers> ts = new ArrayList<Customers>();
		try {
			ds.getConnection();
			
			ts = ds.storeCust();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		String Json = new Gson().toJson(ts);
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(Json);
	}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
