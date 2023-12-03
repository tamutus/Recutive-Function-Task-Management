import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTagsWhereUniqueInputSchema } from './EnergiesToTagsWhereUniqueInputSchema';
import { EnergiesToTagsCreateWithoutTagInputSchema } from './EnergiesToTagsCreateWithoutTagInputSchema';
import { EnergiesToTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToTagsUncheckedCreateWithoutTagInputSchema';

export const EnergiesToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToTagsCreateOrConnectWithoutTagInputSchema;
