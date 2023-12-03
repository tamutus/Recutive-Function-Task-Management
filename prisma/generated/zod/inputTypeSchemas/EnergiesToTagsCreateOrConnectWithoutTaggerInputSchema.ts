import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsCreateWithoutTaggerInputSchema } from './EnergiesToTagsCreateWithoutTaggerInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema';

export const EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateOrConnectWithoutTaggerInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTaggerInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema) ]),
}).strict();

export default EnergiesToTagsCreateOrConnectWithoutTaggerInputSchema;
