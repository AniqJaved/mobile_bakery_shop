import { Observable } from '@nativescript/core';

//Add cart item message
function getMessageAdd(counter) {
  if (counter <= 0) {
    return 'No items in cart';
  } else {
    return `${counter} items in the cart`;
  }
}

//Remove cart item message
function getMessageRemove(counter) {
  if (counter <= 0) {
    return 'No items in cart';
  } else {
    return `${counter} items in the cart`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 0;

  //Add cart item functionality
  viewModel.onTapAdd = () => {
    viewModel.counter++;

    if (
      viewModel.counter % 2 == 0 ||
      viewModel.counter == 1 ||
      viewModel.counter % 2 == 1
    ) {
      viewModel.set('visibleLabel', 'visibleLabelShow');
    }
    viewModel.set('message', getMessageAdd(viewModel.counter));
    // lo the message to the console
    //viewModel.message = getMessage(viewModel.counter);
    console.log(getMessageAdd(viewModel.counter));
  };

  //Remove cart item functionality
  viewModel.onTapRemove = () => {
    if (
      viewModel.counter % 2 == 0 ||
      viewModel.counter == 1 ||
      viewModel.counter % 2 == 1
    ) {
      viewModel.counter--;
      viewModel.set('visibleLabel', 'visibleLabelShow');
    } else {
      viewModel.message = 'No items in cart';
    }

    viewModel.set('message', getMessageRemove(viewModel.counter));
    // log the message to the console
    //viewModel.message = getMessageRemove(viewModel.counter);
    console.log(getMessageRemove(viewModel.counter));
  };

  return viewModel;
}
