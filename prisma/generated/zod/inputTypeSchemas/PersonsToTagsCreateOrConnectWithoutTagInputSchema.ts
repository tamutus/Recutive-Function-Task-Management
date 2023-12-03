import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsCreateWithoutTagInputSchema } from './PersonsToTagsCreateWithoutTagInputSchema';
import { PersonsToTagsUncheckedCreateWithoutTagInputSchema } from './PersonsToTagsUncheckedCreateWithoutTagInputSchema';

export const PersonsToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PersonsToTagsCreateOrConnectWithoutTagInputSchema;
