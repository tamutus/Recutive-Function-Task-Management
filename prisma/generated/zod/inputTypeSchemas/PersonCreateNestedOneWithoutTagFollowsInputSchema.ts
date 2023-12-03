import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTagFollowsInputSchema } from './PersonCreateWithoutTagFollowsInputSchema';
import { PersonUncheckedCreateWithoutTagFollowsInputSchema } from './PersonUncheckedCreateWithoutTagFollowsInputSchema';
import { PersonCreateOrConnectWithoutTagFollowsInputSchema } from './PersonCreateOrConnectWithoutTagFollowsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutTagFollowsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutTagFollowsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTagFollowsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTagFollowsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTagFollowsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutTagFollowsInputSchema;
