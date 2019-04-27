Given /the user is created/ do
  User.create!({
    :email => "joe@gmail.com",
    :password => "123",
    :password_confirmation => "123",
    :firstName => "Oski",
    :lastName => "Bear",
  })
end

Given /the user is loggedin/ do
  step %{the user is created}
  step %{I go to the login page}
  step %{I fill in "email" with "joe@gmail.com"}
  step %{I fill in "password" with "123"}
  step %{I press "Login"}
end

