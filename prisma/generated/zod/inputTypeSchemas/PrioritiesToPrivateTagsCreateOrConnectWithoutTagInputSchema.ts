import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema;
