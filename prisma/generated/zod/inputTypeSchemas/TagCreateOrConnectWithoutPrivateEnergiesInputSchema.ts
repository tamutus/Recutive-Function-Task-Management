import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutPrivateEnergiesInputSchema } from './TagCreateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TagUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const TagCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutPrivateEnergiesInputSchema;
