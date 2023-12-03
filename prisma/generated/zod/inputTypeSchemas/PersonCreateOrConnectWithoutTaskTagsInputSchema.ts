import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutTaskTagsInputSchema } from './PersonCreateWithoutTaskTagsInputSchema';
import { PersonUncheckedCreateWithoutTaskTagsInputSchema } from './PersonUncheckedCreateWithoutTaskTagsInputSchema';

export const PersonCreateOrConnectWithoutTaskTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutTaskTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTaskTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutTaskTagsInputSchema;
