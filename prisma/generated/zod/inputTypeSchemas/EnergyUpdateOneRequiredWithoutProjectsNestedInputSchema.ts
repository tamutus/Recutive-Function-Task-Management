import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutProjectsInputSchema } from './EnergyCreateWithoutProjectsInputSchema';
import { EnergyUncheckedCreateWithoutProjectsInputSchema } from './EnergyUncheckedCreateWithoutProjectsInputSchema';
import { EnergyCreateOrConnectWithoutProjectsInputSchema } from './EnergyCreateOrConnectWithoutProjectsInputSchema';
import { EnergyUpsertWithoutProjectsInputSchema } from './EnergyUpsertWithoutProjectsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutProjectsInputSchema } from './EnergyUpdateToOneWithWhereWithoutProjectsInputSchema';
import { EnergyUpdateWithoutProjectsInputSchema } from './EnergyUpdateWithoutProjectsInputSchema';
import { EnergyUncheckedUpdateWithoutProjectsInputSchema } from './EnergyUncheckedUpdateWithoutProjectsInputSchema';

export const EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => EnergyUpdateWithoutProjectsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutProjectsNestedInputSchema;
