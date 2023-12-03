import { t, publicProcedure } from "./helpers/createRouter";
import { EnergyAggregateSchema } from "../schemas/aggregateEnergy.schema";
import { EnergyCreateManySchema } from "../schemas/createManyEnergy.schema";
import { EnergyCreateOneSchema } from "../schemas/createOneEnergy.schema";
import { EnergyDeleteManySchema } from "../schemas/deleteManyEnergy.schema";
import { EnergyDeleteOneSchema } from "../schemas/deleteOneEnergy.schema";
import { EnergyFindFirstSchema } from "../schemas/findFirstEnergy.schema";
import { EnergyFindManySchema } from "../schemas/findManyEnergy.schema";
import { EnergyFindUniqueSchema } from "../schemas/findUniqueEnergy.schema";
import { EnergyGroupBySchema } from "../schemas/groupByEnergy.schema";
import { EnergyUpdateManySchema } from "../schemas/updateManyEnergy.schema";
import { EnergyUpdateOneSchema } from "../schemas/updateOneEnergy.schema";
import { EnergyUpsertSchema } from "../schemas/upsertOneEnergy.schema";

export const energyRouter = t.router({
  aggregateEnergy: publicProcedure
    .input(EnergyAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergy = await ctx.prisma.energy.aggregate(input);
      return aggregateEnergy;
    }),
  createManyEnergy: publicProcedure
    .input(EnergyCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergy = await ctx.prisma.energy.createMany(input);
      return createManyEnergy;
    }),
  createOneEnergy: publicProcedure
    .input(EnergyCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergy = await ctx.prisma.energy.create(input);
      return createOneEnergy;
    }),
  deleteManyEnergy: publicProcedure
    .input(EnergyDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergy = await ctx.prisma.energy.deleteMany(input);
      return deleteManyEnergy;
    }),
  deleteOneEnergy: publicProcedure
    .input(EnergyDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergy = await ctx.prisma.energy.delete(input);
      return deleteOneEnergy;
    }),
  findFirstEnergy: publicProcedure
    .input(EnergyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergy = await ctx.prisma.energy.findFirst(input);
      return findFirstEnergy;
    }),
  findFirstEnergyOrThrow: publicProcedure
    .input(EnergyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergyOrThrow = await ctx.prisma.energy.findFirstOrThrow(input);
      return findFirstEnergyOrThrow;
    }),
  findManyEnergy: publicProcedure
    .input(EnergyFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergy = await ctx.prisma.energy.findMany(input);
      return findManyEnergy;
    }),
  findUniqueEnergy: publicProcedure
    .input(EnergyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergy = await ctx.prisma.energy.findUnique(input);
      return findUniqueEnergy;
    }),
  findUniqueEnergyOrThrow: publicProcedure
    .input(EnergyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergyOrThrow = await ctx.prisma.energy.findUniqueOrThrow(input);
      return findUniqueEnergyOrThrow;
    }),
  groupByEnergy: publicProcedure
    .input(EnergyGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergy = await ctx.prisma.energy.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergy;
    }),
  updateManyEnergy: publicProcedure
    .input(EnergyUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergy = await ctx.prisma.energy.updateMany(input);
      return updateManyEnergy;
    }),
  updateOneEnergy: publicProcedure
    .input(EnergyUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergy = await ctx.prisma.energy.update(input);
      return updateOneEnergy;
    }),
  upsertOneEnergy: publicProcedure
    .input(EnergyUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergy = await ctx.prisma.energy.upsert(input);
      return upsertOneEnergy;
    }),

}) 
