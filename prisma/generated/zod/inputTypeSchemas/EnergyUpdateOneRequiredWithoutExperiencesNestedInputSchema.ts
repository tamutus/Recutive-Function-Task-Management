import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutExperiencesInputSchema } from './EnergyCreateWithoutExperiencesInputSchema';
import { EnergyUncheckedCreateWithoutExperiencesInputSchema } from './EnergyUncheckedCreateWithoutExperiencesInputSchema';
import { EnergyCreateOrConnectWithoutExperiencesInputSchema } from './EnergyCreateOrConnectWithoutExperiencesInputSchema';
import { EnergyUpsertWithoutExperiencesInputSchema } from './EnergyUpsertWithoutExperiencesInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutExperiencesInputSchema } from './EnergyUpdateToOneWithWhereWithoutExperiencesInputSchema';
import { EnergyUpdateWithoutExperiencesInputSchema } from './EnergyUpdateWithoutExperiencesInputSchema';
import { EnergyUncheckedUpdateWithoutExperiencesInputSchema } from './EnergyUncheckedUpdateWithoutExperiencesInputSchema';

export const EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutExperiencesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutExperiencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutExperiencesInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutExperiencesInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutExperiencesInputSchema),z.lazy(() => EnergyUpdateWithoutExperiencesInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutExperiencesInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutExperiencesNestedInputSchema;
