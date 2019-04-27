Given /the admin is created/ do
  User.create!({
    :email => "admin@gmail.com",
    :password => "123",
    :password_confirmation => "123",
    :firstName => "Oski",
    :lastName => "Bear",
    :admin => "True"
  })
end

Given /the admin is loggedin/ do
  step %{I go to the login page}
  step %{I fill in "email" with "admin@gmail.com"}
  step %{I fill in "password" with "123"}
  step %{I press "Login"}
end