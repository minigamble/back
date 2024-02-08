const router = require('express').Router();
const Admin = require('./admin.model');

router.route('/').post((req, res) => {
    Admin.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const phone = req.body.phone;
  Admin.find({phone:phone})
  .then(phone => res.json(phone))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  Admin.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const phone = req.body.phone
  const password = req.body.password
  const invite  = req.body.invite
  const AcBalance = req.body.AcBalance
  const InBalance = req.body.InBalance
  const product = req.body.product
  const cycle = req.body.cycle
  const daily = req.body.daily
  const total  = req.body.total
  const task  = req.body.task
  const count  = req.body.count
  const ac = req.body.ac
  const b = req.body.b
  const c = req.body.c
  const d = req.body.d
  const rb = req.body.rb
  const rc = req.body.rc
  const rd = req.body.rd
  const bank = req.body.bank
  const acname = req.body.acname
  const Deposit = req.body.Deposit
  const withdrawal = req.body.withdrawal
  const key = req.body.key
  const bonus = req.body.bonus

  const userData = new Admin({
    phone,password,invite,AcBalance,InBalance,product,cycle,daily,total,task,count,ac,b,c,d,rb,rc,rd,bank,acname,Deposit,withdrawal,key,bonus});

  userData.save()
    .then(() => res.json('Admin Registration sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Admin.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  Admin.findOneAndRemove({"test":test})
  
    .then(() => res.json('test Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/remove').post((req, res) => {
  Admin.findByIdAndRemove(req.body._id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const invite = req.body.invite
  Admin.findOne({invite:invite})
    .then(invite => {
      invite.phone = req.body.phone;
      invite.password = req.body.password;
      invite.invite = req.body.invite;
      invite.AcBalance = req.body.AcBalance;
      invite.InBalance = req.body.InBalance;
      invite.product = req.body.product;
      invite.cycle = req.body.cycle;
      invite.daily = req.body.daily;
      invite.total = req.body.total;
      invite.task = req.body.task;
      invite.count = req.body.count;
      invite.ac = req.body.ac;
      invite.b = req.body.b;
      invite.c = req.body.c;
      invite.d = req.body.d;
      invite.rb = req.body.rb;
      invite.rc = req.body.rc;
      invite.rd = req.body.rd;
      invite.bank = req.body.bank;
      invite.acname = req.body.acname;
      invite.Deposit = req.body.Deposit;
      invite.withdrawal = req.body.withdrawal;
      invite.key = req.body.key;
      invite.bonus = req.body.bonus;

      invite.save()
        .then(() => res.json('test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;