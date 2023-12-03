import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsScalarWhereInputSchema } from './EnergiesToPrivateTagsScalarWhereInputSchema';
import { EnergiesToPrivateTagsUpdateManyMutationInputSchema } from './EnergiesToPrivateTagsUpdateManyMutationInputSchema';
import { EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToPrivateTagsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsUpdateManyWithWhereWithoutEnergyInputSchema;
