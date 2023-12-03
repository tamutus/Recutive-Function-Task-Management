import { t, publicProcedure } from "./helpers/createRouter";
import { EnergyMeasurementAggregateSchema } from "../schemas/aggregateEnergyMeasurement.schema";
import { EnergyMeasurementCreateManySchema } from "../schemas/createManyEnergyMeasurement.schema";
import { EnergyMeasurementCreateOneSchema } from "../schemas/createOneEnergyMeasurement.schema";
import { EnergyMeasurementDeleteManySchema } from "../schemas/deleteManyEnergyMeasurement.schema";
import { EnergyMeasurementDeleteOneSchema } from "../schemas/deleteOneEnergyMeasurement.schema";
import { EnergyMeasurementFindFirstSchema } from "../schemas/findFirstEnergyMeasurement.schema";
import { EnergyMeasurementFindManySchema } from "../schemas/findManyEnergyMeasurement.schema";
import { EnergyMeasurementFindUniqueSchema } from "../schemas/findUniqueEnergyMeasurement.schema";
import { EnergyMeasurementGroupBySchema } from "../schemas/groupByEnergyMeasurement.schema";
import { EnergyMeasurementUpdateManySchema } from "../schemas/updateManyEnergyMeasurement.schema";
import { EnergyMeasurementUpdateOneSchema } from "../schemas/updateOneEnergyMeasurement.schema";
import { EnergyMeasurementUpsertSchema } from "../schemas/upsertOneEnergyMeasurement.schema";

export const energymeasurementsRouter = t.router({
  aggregateEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergyMeasurement = await ctx.prisma.energyMeasurement.aggregate(input);
      return aggregateEnergyMeasurement;
    }),
  createManyEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergyMeasurement = await ctx.prisma.energyMeasurement.createMany(input);
      return createManyEnergyMeasurement;
    }),
  createOneEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergyMeasurement = await ctx.prisma.energyMeasurement.create(input);
      return createOneEnergyMeasurement;
    }),
  deleteManyEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergyMeasurement = await ctx.prisma.energyMeasurement.deleteMany(input);
      return deleteManyEnergyMeasurement;
    }),
  deleteOneEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergyMeasurement = await ctx.prisma.energyMeasurement.delete(input);
      return deleteOneEnergyMeasurement;
    }),
  findFirstEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergyMeasurement = await ctx.prisma.energyMeasurement.findFirst(input);
      return findFirstEnergyMeasurement;
    }),
  findFirstEnergyMeasurementOrThrow: publicProcedure
    .input(EnergyMeasurementFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergyMeasurementOrThrow = await ctx.prisma.energyMeasurement.findFirstOrThrow(input);
      return findFirstEnergyMeasurementOrThrow;
    }),
  findManyEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergyMeasurement = await ctx.prisma.energyMeasurement.findMany(input);
      return findManyEnergyMeasurement;
    }),
  findUniqueEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergyMeasurement = await ctx.prisma.energyMeasurement.findUnique(input);
      return findUniqueEnergyMeasurement;
    }),
  findUniqueEnergyMeasurementOrThrow: publicProcedure
    .input(EnergyMeasurementFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergyMeasurementOrThrow = await ctx.prisma.energyMeasurement.findUniqueOrThrow(input);
      return findUniqueEnergyMeasurementOrThrow;
    }),
  groupByEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergyMeasurement = await ctx.prisma.energyMeasurement.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergyMeasurement;
    }),
  updateManyEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergyMeasurement = await ctx.prisma.energyMeasurement.updateMany(input);
      return updateManyEnergyMeasurement;
    }),
  updateOneEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergyMeasurement = await ctx.prisma.energyMeasurement.update(input);
      return updateOneEnergyMeasurement;
    }),
  upsertOneEnergyMeasurement: publicProcedure
    .input(EnergyMeasurementUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergyMeasurement = await ctx.prisma.energyMeasurement.upsert(input);
      return upsertOneEnergyMeasurement;
    }),

}) 
