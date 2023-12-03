import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergyAggregateSchema } from "../schemas/aggregatePrivateEnergy.schema";
import { PrivateEnergyCreateManySchema } from "../schemas/createManyPrivateEnergy.schema";
import { PrivateEnergyCreateOneSchema } from "../schemas/createOnePrivateEnergy.schema";
import { PrivateEnergyDeleteManySchema } from "../schemas/deleteManyPrivateEnergy.schema";
import { PrivateEnergyDeleteOneSchema } from "../schemas/deleteOnePrivateEnergy.schema";
import { PrivateEnergyFindFirstSchema } from "../schemas/findFirstPrivateEnergy.schema";
import { PrivateEnergyFindManySchema } from "../schemas/findManyPrivateEnergy.schema";
import { PrivateEnergyFindUniqueSchema } from "../schemas/findUniquePrivateEnergy.schema";
import { PrivateEnergyGroupBySchema } from "../schemas/groupByPrivateEnergy.schema";
import { PrivateEnergyUpdateManySchema } from "../schemas/updateManyPrivateEnergy.schema";
import { PrivateEnergyUpdateOneSchema } from "../schemas/updateOnePrivateEnergy.schema";
import { PrivateEnergyUpsertSchema } from "../schemas/upsertOnePrivateEnergy.schema";

export const privateenergiesRouter = t.router({
  aggregatePrivateEnergy: publicProcedure
    .input(PrivateEnergyAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergy = await ctx.prisma.privateEnergy.aggregate(input);
      return aggregatePrivateEnergy;
    }),
  createManyPrivateEnergy: publicProcedure
    .input(PrivateEnergyCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergy = await ctx.prisma.privateEnergy.createMany(input);
      return createManyPrivateEnergy;
    }),
  createOnePrivateEnergy: publicProcedure
    .input(PrivateEnergyCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergy = await ctx.prisma.privateEnergy.create(input);
      return createOnePrivateEnergy;
    }),
  deleteManyPrivateEnergy: publicProcedure
    .input(PrivateEnergyDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergy = await ctx.prisma.privateEnergy.deleteMany(input);
      return deleteManyPrivateEnergy;
    }),
  deleteOnePrivateEnergy: publicProcedure
    .input(PrivateEnergyDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergy = await ctx.prisma.privateEnergy.delete(input);
      return deleteOnePrivateEnergy;
    }),
  findFirstPrivateEnergy: publicProcedure
    .input(PrivateEnergyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergy = await ctx.prisma.privateEnergy.findFirst(input);
      return findFirstPrivateEnergy;
    }),
  findFirstPrivateEnergyOrThrow: publicProcedure
    .input(PrivateEnergyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergyOrThrow = await ctx.prisma.privateEnergy.findFirstOrThrow(input);
      return findFirstPrivateEnergyOrThrow;
    }),
  findManyPrivateEnergy: publicProcedure
    .input(PrivateEnergyFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergy = await ctx.prisma.privateEnergy.findMany(input);
      return findManyPrivateEnergy;
    }),
  findUniquePrivateEnergy: publicProcedure
    .input(PrivateEnergyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergy = await ctx.prisma.privateEnergy.findUnique(input);
      return findUniquePrivateEnergy;
    }),
  findUniquePrivateEnergyOrThrow: publicProcedure
    .input(PrivateEnergyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergyOrThrow = await ctx.prisma.privateEnergy.findUniqueOrThrow(input);
      return findUniquePrivateEnergyOrThrow;
    }),
  groupByPrivateEnergy: publicProcedure
    .input(PrivateEnergyGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergy = await ctx.prisma.privateEnergy.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergy;
    }),
  updateManyPrivateEnergy: publicProcedure
    .input(PrivateEnergyUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergy = await ctx.prisma.privateEnergy.updateMany(input);
      return updateManyPrivateEnergy;
    }),
  updateOnePrivateEnergy: publicProcedure
    .input(PrivateEnergyUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergy = await ctx.prisma.privateEnergy.update(input);
      return updateOnePrivateEnergy;
    }),
  upsertOnePrivateEnergy: publicProcedure
    .input(PrivateEnergyUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergy = await ctx.prisma.privateEnergy.upsert(input);
      return upsertOnePrivateEnergy;
    }),

}) 
