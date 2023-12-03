import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPrivateTagsWhereUniqueInputSchema } from './EnergiesToPrivateTagsWhereUniqueInputSchema';
import { EnergiesToPrivateTagsCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => EnergiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default EnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema;
