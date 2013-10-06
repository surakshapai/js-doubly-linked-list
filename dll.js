$(document).ready(function(){
var linked_list = function(){


}

linked_list.prototype = {
	insertFront : function(n){
		var newnode = new double_ll(n);
		newnode.next_node = first;
		first.prev_node = newnode;
		first = newnode;
		last.next_node = first;
		first.prev_node = last;	

		for(var i=first; i != last; i=i.next_node)
		{
			$(".insertFResult").append(i.val + " " + "->" + " ");
		}

		$(".insertFResult").append(last.val);
		$(".insertFResult").append("<br/>");
	},

	insertRear : function(n){
		var newnode = new double_ll(n);
		last.next_node = newnode;
		newnode.prev_node = last;
		newnode.next_node = first;
		first.prev_node = newnode;
		last = newnode;

		for(var i=first; i != last; i=i.next_node)
		{
			$(".insertRResult").append(i.val + " " + "->" + " ");

		}

		$(".insertRResult").append(last.val);
		$(".insertRResult").append("<br/>");
	},

	deleteFront : function(){
		var temp = first;
		first = first.next_node;
		first.prev_node = last;
		last.next_node = first;
		temp = null;

		for(var i=first; i != last; i=i.next_node)
		{
			$(".deleteFResult").append(i.val + " " + "->" + " ");
		}

		$(".deleteFResult").append(last.val);
		$(".deleteFResult").append("<br/>");

	},

	deleteRear : function(){
		var temp;
		temp = last;
		last = last.prev_node;
		last.next_node = first;
		first.prev_node = last;
		temp = null;

		for(var i=first; i != last; i=i.next_node)
		{
			$(".deleteRResult").append(i.val + " " + "->" + " ");
		}

		$(".deleteRResult").append(last.val);
		$(".deleteRResult").append("<br/>");
	},

	deleteSpec : function(n){
		var temp;

		if(n == first.val)
			{
				var temp2 = first;
				var nextNode = first.next_node;
				var prevNode = first.prev_node;				
				nextNode.prev_node = prevNode;
				prevNode.next_node = nextNode; 
				first = nextNode;
				temp2 = null;
			
			}
			else if(n == last.val)
			{
				var temp3 = last;
				var pnode = last.prev_node;
				var nnode = last.next_node;
				pnode.next_node = nnode;
				nnode.prev_node = pnode;
				last = pnode;
				temp3 = null;
				
			}
			else
			{
	
				for(temp=first; temp.next_node !=last.next_node; temp=temp.next_node)
				{	
			
					 if(temp.val == n)
					{
						var prev = temp.prev_node;
						prev.next_node = temp.next_node;
						var next = temp.next_node;
						next.prev_node = prev;
						var temp1 = temp;
						temp1 = null;
						
					}

					else
					{
						$(".deleteSResult").text("Enter a number that exists in the list, you moron");
					}
				}
			}

		
		for(var i=first; i != last; i=i.next_node)
		{
			$(".deleteSResult").append(i.val + " " + "->" + " ");
		}

		$(".deleteSResult").append(last.val);
		$(".deleteSResult").append("<br/>");
	}
		



}

var double_ll = function(i){
	this.val = i;
}

double_ll.prototype = new linked_list();

var temp_ref;
var node;

for(var tracer=1;tracer<=5;tracer++){
	if(tracer == 1)
	{
		node = new double_ll(tracer);
		var first = node;
	}
	else
	{
		node = new double_ll(tracer);
		node.prev_node = temp;
		temp.next_node = node;
		$(".dll_prev").append(node.val + " s previous node is " +  node.prev_node.val);
		$(".dll_prev").append("<br/>");
		$(".dll_next").append(temp.val + " s next node is " + temp.next_node.val);
		$(".dll_next").append("<br/>");
		
	}
	if(tracer>4){
		node.next_node = first;
		first.prev_node = node;
		last = node;
		$(".dll_next").append(last.val + " s next node is " + first.val + "\n");
		$(".dll_next").append("<br/>");
		$(".dll_prev").append(first.val +" s previous node is " + last.val).before("<br/>");
		$(".dll_prev").append("<br/>");
	}

	temp = node;
	$(".dll").append(node.val + " " + "->" + "   ");
	
	

}

$("#insertF").on('click',function(){
	$(".insertFrontDesc").show();
	$(".textB").show();
	$(".btn").show();
});

$(".btn").on('click',function(){
	var n = $(".textB").val();
	node.insertFront(n);
});

$("#insertR").on('click',function(){
	$(".insertRearDesc").show();
	$(".textB1").show();
	$(".btn1").show();
});

$(".btn1").on('click',function(){
	var n = $(".textB1").val();
	node.insertRear(n);
});

$("#deleteF").on('click',function(){
	$(".deleteFResult").show();
	node.deleteFront();
});

$("#deleteR").on('click',function(){
	$(".deleteRResult").show();
	node.deleteRear();
});

$("#deleteS").on('click',function(){
	$(".deleteSpec").show();
	$(".textB2").show();
	$(".btn2").show();
});

$(".btn2").on('click',function(){
	var n = $(".textB2").val();
	node.deleteSpec(n);
});
	
});