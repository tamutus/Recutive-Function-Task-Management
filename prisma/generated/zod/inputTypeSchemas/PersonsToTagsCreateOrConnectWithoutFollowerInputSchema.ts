import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';
import { PersonsToTagsCreateWithoutFollowerInputSchema } from './PersonsToTagsCreateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedCreateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedCreateWithoutFollowerInputSchema';

export const PersonsToTagsCreateOrConnectWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsCreateOrConnectWithoutFollowerInput> = z.object({
  where: z.lazy(() => PersonsToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema) ]),
}).strict();

export default PersonsToTagsCreateOrConnectWithoutFollowerInputSchema;
