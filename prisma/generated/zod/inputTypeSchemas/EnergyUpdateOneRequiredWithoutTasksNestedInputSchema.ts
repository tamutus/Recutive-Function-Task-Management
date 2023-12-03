import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutTasksInputSchema } from './EnergyCreateWithoutTasksInputSchema';
import { EnergyUncheckedCreateWithoutTasksInputSchema } from './EnergyUncheckedCreateWithoutTasksInputSchema';
import { EnergyCreateOrConnectWithoutTasksInputSchema } from './EnergyCreateOrConnectWithoutTasksInputSchema';
import { EnergyUpsertWithoutTasksInputSchema } from './EnergyUpsertWithoutTasksInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutTasksInputSchema } from './EnergyUpdateToOneWithWhereWithoutTasksInputSchema';
import { EnergyUpdateWithoutTasksInputSchema } from './EnergyUpdateWithoutTasksInputSchema';
import { EnergyUncheckedUpdateWithoutTasksInputSchema } from './EnergyUncheckedUpdateWithoutTasksInputSchema';

export const EnergyUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => EnergyUpdateWithoutTasksInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutTasksNestedInputSchema;
