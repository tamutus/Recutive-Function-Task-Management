import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutPrivateTagsInputSchema } from './PersonCreateWithoutPrivateTagsInputSchema';
import { PersonUncheckedCreateWithoutPrivateTagsInputSchema } from './PersonUncheckedCreateWithoutPrivateTagsInputSchema';

export const PersonCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutPrivateTagsInputSchema;
