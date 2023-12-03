import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsUpdateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUpdateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';

export const PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrioritiesToPrivateTagsUpdateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsUpsertWithWhereUniqueWithoutTagInputSchema;
